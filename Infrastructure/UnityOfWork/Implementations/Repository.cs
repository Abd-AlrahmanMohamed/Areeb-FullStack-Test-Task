
using System.Linq.Expressions;

namespace Infrastructure.Implementations
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<T> _entity;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
            _entity = _context.Set<T>();
        }
        public async ValueTask<IEnumerable<T>> GetAllAsync() => await _entity.ToListAsync();

        public async ValueTask<T> GetByidAsync(string id) => await _entity.FindAsync(id);
        public async ValueTask<T> AddAsync(T entity)
        {
            await _entity.AddAsync(entity);
            return entity;
        }

        public async ValueTask<T> UpdateAsync(T entity)
        {
            _entity.Update(entity);

            return entity;
        }

        public async ValueTask<T> DeleteAsync(string id)
        {

            var delete = await _entity.FindAsync(id);
            if (delete != null)
                _entity.Remove(delete);

            return delete;
        }



        public int Complete()
        {
            return _context.SaveChanges();
        }

        //public async ValueTask<IEnumerable<T>> FindAllAsync(Expression<Func<T, object>> includes)
        //{
        //    IQueryable<T> query = _context.Set<T>().Where(includes);

        //    // Dynamically apply Include if any
        //    if (includes != null)
        //    {
        //        foreach (var include in includes)
        //        {
        //            query = query.Include(include);
        //        }
        //    }

        //    return await query.AsNoTracking().ToListAsync();
        //}



            public async Task<IEnumerable<T>> FindAllAsync(
                Expression<Func<T, bool>> predicate,
                params Expression<Func<T, object>>[] includes)
            {
                IQueryable<T> query = _context.Set<T>().Where(predicate);

                // Dynamically apply the include expressions
                foreach (var include in includes)
                {
                    query = query.Include(include);
                }

                return await query.AsNoTracking().ToListAsync();
            }
        }

    }
