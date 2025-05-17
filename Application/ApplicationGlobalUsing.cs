global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.AspNetCore.Http;
global using Microsoft.AspNetCore.Builder;
global using FluentValidation;
global using MediatR;
global using Application.Extensions;
global using Application.Mediator;
global using Microsoft.AspNetCore.Diagnostics;
global using System.Net;
global using System.Text.Json;
global using System.Reflection;

global using Domain.Models;
global using Domain.SignUp;
global using Domain.Login;



global using Application.Dto;

global using Application.MediatorHandler.MediatorQuery.Events;
global using Application.MediatorHandler.MediatorCommand.Events;
global using Application.MediatorHandler.MediatorCommand.Bookings;
global using Application.MediatorHandler.MediatorQuery.Bookings;


global using AutoMapper;
global using Infrastructure.Interfaces;
