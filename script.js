const skills = [
{
    title:"熊谷 夏月",
    text:"ヘルプデスクではPMO補佐、開発現場ではシステム改修・運用保守を経験しました。PMO補佐ではチーム運営や業務改善、ドキュメント作成など広くやらせてもらいました。また昨年Excelの資格取得をし、武器を1つ手に入れました"
},
{
    title:"酒井 拓己",
    text:"テスターの業務を１年経てなんでも屋さんなんだなと実感。IT関連はこれといったものはないがコミュニケーションと効率を常に考えた行動は前面に出して戦っていく"
},
{
    title:"藤間 勇行",
    text:"学生時代はUnityを使用したゲーム開発に取り組み、C言語・C++を用いたプログラミングを経験しました。また、Visual Studioを利用してアプリケーション開発の基礎を学びました。現在はテスター業務に約1年間従事しており、検査仕様書の作成やソフトウェア・機器の動作確認、不具合の報告などを担当しています"
},
{
    title:"岩井 美樹",
    text:"前職では半年ほど、自社製品のECサイトの開発・改修業務に携わっていました。主にVue.jsを使用したフロントエンド側の改修を担当しており、バックエンドのJavaにも一部触れていました。まだ参画して間もないですが、現在の現場ではAIを使ったPL/SQLの開発に携わっています"
}
];

function gacha() {

    const card = document.getElementById("card");
    const button = document.querySelector("button");

    button.disabled = true;

    let count = 0;

    const animation = setInterval(() => {

        const random = Math.floor(Math.random() * skills.length);
        const skill = skills[random];

        card.innerHTML = `
            <h2>${skill.title}</h2>
            <p>${skill.text}</p>
        `;

        count++;

        if (count >= 30) { // 100ms × 30 = 約3秒

            clearInterval(animation);

            const finalRandom =
                Math.floor(Math.random() * skills.length);

            const finalSkill = skills[finalRandom];

            card.innerHTML = `
                <h2>${finalSkill.title}</h2>
                <p>${finalSkill.text}</p>
            `;

            card.classList.remove("result-animation");
            void card.offsetWidth;
            card.classList.add("result-animation");

            button.disabled = false;
        }

    }, 100);
}