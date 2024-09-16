DiscordBot.Create("Webhook URL")
    .WithEmbed(Embed.Create()
        .WithDescription("Hello, World!") // 설명 추가
        .WithColor(Color.yellow) // 왼쪽 라인 색상 변경
        .WithTitle("Test Title") // 제목 추가
        .WithURL("https://google.com")) // 제목 클릭 시 이동할 링크 추가
    .Send();