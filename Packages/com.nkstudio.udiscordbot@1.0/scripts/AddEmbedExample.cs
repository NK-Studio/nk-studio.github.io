DiscordBot.Create("Webhook URL")
    .WithEmbed(Embed.Create()
        .WithDescription("Hello, World!") // Add description
        .WithColor(Color.yellow) // Change the left line color
        .WithTitle("Test Title") // Add title
        .WithURL("https://google.com")) // Add link to navigate when the title is clicked
    .Send();