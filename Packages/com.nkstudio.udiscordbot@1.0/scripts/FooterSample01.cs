DiscordBot.Create("Webhook URL")
    .WithEmbed
    (
        Embed.Create()
            .WithTitle("Title")
            .WithDescription("Description")
            .WithFooter(
                Footer.Create("Wow! So cool!")
                    .WithIconURL("https://akamai.pizzahut.co.kr/2020pizzahut-prod/public/img/menu/RPPZ1893_RPEG0016_RPDO0003_l.png")
    )
    .Send();