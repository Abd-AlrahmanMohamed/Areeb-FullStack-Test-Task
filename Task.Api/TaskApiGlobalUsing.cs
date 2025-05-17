//Domain
global using Domain;
global using Domin;

//Infrastructure
global using Infrastructure;
global using Infrastructure.Interfaces;

//Applicatin
global using Application;
global using Application.Extensions;

//TaskApi
global using Task.Api;

//packages
global using Microsoft.AspNetCore.Authentication.JwtBearer;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.IdentityModel.Tokens;
global using System.Text;
global using Microsoft.AspNetCore.Mvc;


global using Application.Dto;
global using Application.MediatorHandler.MediatorCommand.Bookings;
global using Application.MediatorHandler.MediatorQuery.Bookings;
global using Application.MediatorHandler.MediatorCommand.Events;
global using Application.MediatorHandler.MediatorQuery.Events;
global using Domain.Models;
global using Domain.Routing.BaseRouter;
 global using MediatR;


