DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Title")
            .WithDescription("Description")
            .WithAuthor(
                Author.Create("NK Studio")
                    .WithURL("https://www.reddit.com/r/Pizza/")
    )
    .Send();