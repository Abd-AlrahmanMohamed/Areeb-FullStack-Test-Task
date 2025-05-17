# Areeb-FullStack-Test-Task

#  Event Booking System — Full Stack AI-Supported Project

A full-stack web-based event booking system built with **.NET 9** (Backend) and **React.js** (Frontend). This application allows users to browse and book events, while providing an admin panel for event management. The development process included AI tool support (e.g., ChatGPT, GitHub Copilot).

---

##  AI Integration

This project was developed using:
- **ChatGPT**: Code generation, debugging assistance, and architectural guidance.

---

##  Live Demo

> **Vercel**.

---

##  Features

### 👤 Authentication
- User registration and login
- JWT-based secure authentication
- User roles: **Admin**, **User**
- No "Forgot Password" functionality (by design)

###  Home Page (Event Listings)
- Display all events in a responsive grid
- Events show a “Booked” label if already reserved
- “Book Now” button for new bookings

###  Event Details Page
- View event details: Name, Description, Category, Date, Venue, Price, Image
- Book a ticket (1 per click)

###  Admin Panel
- Admin can **Create, Read, Update, and Delete** (CRUD) events
- Separate section in the web app (protected by role-based routing)
- Built-in role management

###  Multi-Language Support
- Supports **English** and **Arabic** using `.NET Globalization`
- Language selection managed server-side

---

## 🛠 Technologies Used

### Frontend
- **React.js**
- **React Router**
- **Redux** for state management
- **Material UI** and **Bootstrap** for UI
- **React Toastify** for notifications
- **Axios** for API communication
- **Vercel** for frontend deployment

### Backend
- **.NET 9**
- **Entity Framework Core** (EF Core)
- **SQL Server** (local)
- **MediatR**: Implements CQRS (Command/Query Responsibility Segregation)
- **AutoMapper**: Object-to-object mapping
- **JWT Authentication**
- **Linq**
- **SOLID Principles**, **Repository Pattern**, **Unit of Work Pattern**, **Design Patterns**
- **Globalization / Localization** for Arabic and English

### Clone the Repository
```bash
https://github.com/Abd-AlrahmanMohamed/Areeb-FullStack-Test-Task.git


