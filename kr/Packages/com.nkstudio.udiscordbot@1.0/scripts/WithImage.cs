DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Title")
            .WithDescription("Description")
            .WithImage("https://i.imgur.com/ZGPxFN2.jpg")
            .Send();