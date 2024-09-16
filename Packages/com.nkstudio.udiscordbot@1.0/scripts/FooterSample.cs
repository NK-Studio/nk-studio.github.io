DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Title")
            .WithDescription("Description")
            .WithFooter(
                Footer.Create("Wow! So cool!")
    )
    .Send();