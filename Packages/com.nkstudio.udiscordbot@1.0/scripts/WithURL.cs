DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Let's go! Google!")
            .WithURL("https://google.com/")
    )
    .Send();