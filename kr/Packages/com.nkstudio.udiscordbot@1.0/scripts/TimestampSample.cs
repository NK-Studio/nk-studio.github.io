DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithDescription("Hello, Discord!")
            .WithTimestamp(
                Timestamp.Create()
            )
            .Send();