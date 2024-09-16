DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Title")
            .WithDescription("Description")
            .WithThumbnailURL("../.png")
    )
    .Send();