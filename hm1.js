let jsonHeroes = `[{   
        "name": "Бэтмен",
        "alterego": "Брюс Уэйн",
        "universe": "DC Comics",
        "activity": "борец с преступностью, филантроп, миллиардер",
        "friends": "Робин, Бэтгерл",
        "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
        "image" : "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
    },{
        "name" : "Супермен",
        "alterego": "Кларк Кент",
        "universe": "DC Comics",
        "activity": "борец за справедливость",
        "friends": "собака Крипто",
        "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
        "image" : "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
    },{
        "name": "Человек-паук",
        "alterego": "Питер Паркер",
        "universe": "Marvel Comics",
        "activity": "борец за справедливость, студент, фотограф",
        "friends": "Мстители, Фантастическая четверка, Люди Икс",
        "superpower": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
        "image" : "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
    }]`;

console.log(jsonHeroes)

document.addEventListener("DOMContentLoaded", function
    (event) {
    let heroes = JSON.parse(jsonHeroes);
    console.log(heroes);
    let heroesContent = "";
    for (let hero of heroes) {
        heroesContent += ` <div class='heroes'>
    <h2>${hero.name}</h2>
    <div>Личность: ${hero.alterego}<div>
    <div>Вселенная: ${hero.universe}<div>
    <div>Деятельность: ${hero.activity}<div>
    <div>Друзья: ${hero.friends}<div>
    <div>Суперсила: ${hero.superpower}<div>
    <div>Фото: <img src=${hero.image}><div>
    <div>Поставить оценку: <input id="rating">/10</div>
    </div>` ;
    }


    document.getElementById("heroesContainer")
        .innerHTML = heroesContent;

    let input = document.getElementById("rating");
    localStorage.setItem('LogPictCom', JSON.stringify(input));

}

);

let input = document.getElementById("rating");
localStorage.setItem('rating', input.value)
