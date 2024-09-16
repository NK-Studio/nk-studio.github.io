DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithDescription("Test Description")
    )
    .Send();