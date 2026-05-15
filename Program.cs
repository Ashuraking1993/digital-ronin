var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();

var app = builder.Build();

// Configure middleware
app.UseHttpsRedirection();

app.UseAuthorization();

// Enable controllers
app.MapControllers();

app.Run();