using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureServices(services =>
    {
        services.AddApplicationInsightsTelemetryWorkerService();
        services.Configure<WorkerOptions>(options =>
        {
            options.ApplicationInsightsSamplingSettings.IsEnabled = true;
            options.ApplicationInsightsSamplingSettings.ExcludedTypes = "Request";
            options.ApplicationInsightsEnableLiveMetrics = true;
        });
    })
    .Build();

host.Run();
