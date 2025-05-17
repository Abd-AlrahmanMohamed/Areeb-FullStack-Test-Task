using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Infrastructure.Interfaces
{
    public interface IRepository<T> where T : class
    {
        ValueTask<T> GetByidAsync(string id);
        ValueTask<IEnumerable<T>> GetAllAsync();
        ValueTask<T> AddAsync(T entity);
        ValueTask<T> UpdateAsync(T entity);
        ValueTask<T> DeleteAsync(string id);
        Task<IEnumerable<T>> FindAllAsync(
        Expression<Func<T, bool>> predicate,
        params Expression<Func<T, object>>[] includes);


    }
}
