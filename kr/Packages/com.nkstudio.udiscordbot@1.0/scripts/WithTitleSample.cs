DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Test Title")
    )
    .Send();