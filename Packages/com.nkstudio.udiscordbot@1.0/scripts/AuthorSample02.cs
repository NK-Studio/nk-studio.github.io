DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Title")
            .WithDescription("Description")
            .WithAuthor(
                Author.Create("NK Studio")
                    .WithIconURL("https://akamai.pizzahut.co.kr/2020pizzahut-prod/public/img/menu/RPPZ1893_RPEG0016_RPDO0003_l.png")
    )
    .Send();