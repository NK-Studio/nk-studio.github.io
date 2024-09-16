DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Title")
            .WithDescription("Description")
            .WithColor(Color.green)
    )
    .Send();