let movies = [
    { name: "가디언즈오브갤럭시-Volume3", age: "12", ranking: "1" },
    { name: "슈퍼마리오브라더스", age: "0", ranking: "2" },
    { name: "드림", age: "12", ranking: "3" },
    { name: "존윅4", age: "18", ranking: "4" },
    { name: "극장판짱구는못말려-동물소환닌자배꼽수비대", age: "0", ranking: "5" },
    { name: "스즈메의문단속", age: "12", ranking: "6" },
    { name: "더퍼스트슬램덩크", age: "12", ranking: "7" },
    { name: "LESSERAFIMCOMEBACKSHOW-UNFORGIVENinCGV", age: "12", ranking: "8" },
    { name: "옥수역귀신", age: "15", ranking: "9" },
    { name: "2001스페이스오디세이", age: "12", ranking: "10" },
    { name: "뮤지컬공연실황,알쏭달쏭캐치!티니핑<신비한상자를열어라!>", age: "0", ranking: "11" },
    { name: "리바운드", age: "12", ranking: "12" },
    { name: "무명", age: "15", ranking: "13" },
    { name: "블레이드러너-더파이널컷", age: "15", ranking: "14" },
    { name: "킬링로맨스", age: "15", ranking: "15" },
    { name: "클로즈", age: "12", ranking: "16" },
    { name: "항구의니쿠코짱!", age: "0", ranking: "17" },
    { name: "아임히어로더파이널", age: "0", ranking: "18" },
    { name: "롱디", age: "12", ranking: "19" },
    { name: "극장판헬로카봇-수상한마술단의비밀", age: "0", ranking: "20" },
    { name: "뽀로로극장판드래곤캐슬대모험", age: "0", ranking: "21" },
    { name: "치킨래빗-잃어버린보물을찾아서", age: "0", ranking: "22" },
    { name: "자전거도둑", age: "12", ranking: "23" },
    { name: "리턴투서울", age: "15", ranking: "24" },
    { name: "피기", age: "15", ranking: "25" },
    { name: "라이스보이슬립스", age: "15", ranking: "26" },
    { name: "슬픔의삼각형", age: "15", ranking: "27" },
    { name: "콜드플레이뮤직오브더스피어스라이브앳리버플레이트", age: "0", ranking: "28" },
    { name: "거울속외딴성", age: "12", ranking: "29" },
    { name: "파벨만스", age: "12", ranking: "30" },
    { name: "카구야님은고백받고싶어-첫키스는끝나지않아-", age: "12", ranking: "31" },
    { name: "렌필드", age: "18", ranking: "32" },
    { name: "빈필하모닉정기연주회-주빈메타&amp;마르타아르헤리치", age: "0", ranking: "33" },
    { name: "아머드사우루스-기계공룡제국의침략", age: "0", ranking: "34" },
    { name: "웅남이", age: "15", ranking: "35" },
    { name: "빈필하모닉정기연주회-안드리스넬슨스", age: "0", ranking: "36" },
    { name: "영웅", age: "12", ranking: "37" },
    { name: "엘카미노", age: "0", ranking: "38" },
    { name: "낭만적공장", age: "15", ranking: "39" },
    { name: "튤립모양", age: "12", ranking: "40" },
    { name: "장기자랑", age: "12", ranking: "41" },
    { name: "던전앤드래곤-도적들의명예", age: "12", ranking: "42" },
    { name: "오글리스-웰컴투냄새마을", age: "0", ranking: "43" },
    { name: "물안에서", age: "12", ranking: "44" },
    { name: "65", age: "12", ranking: "45" },
    { name: "곰돌이푸-피와꿀", age: "18", ranking: "46" },
    { name: "가디언즈오브갤럭시", age: "12", ranking: "47" },
    { name: "가디언즈오브갤럭시VOL.2", age: "12", ranking: "48" },
    { name: "로보카폴리안전교실교통편", age: "0", ranking: "49" },
    { name: "서치2", age: "12", ranking: "50" },
    { name: "치치핑핑의쿵쿵따탐험대", age: "0", ranking: "51" },
    { name: "캐리러브콘서트케이팝", age: "0", ranking: "52" },

];

let movie_list = document.getElementById('movie_list');
let sort_list = document.getElementById('sort_list');
let movie_plz = document.getElementById('movie_plz');

let sort = 'rank_asc';

sort_list.getElementsByTagName('a')[0].addEventListener("click", () => {
    movie_list.innerHTML = '';
    if (sort == 'rank_asc') {
        sort = 'rank_desc';
        printMovies(sort);
    }
    else {
        sort = 'rank_asc';
        printMovies(sort)
    }
});

sort_list.getElementsByTagName('a')[1].addEventListener("click", () => {
    movie_list.innerHTML = '';
    if (sort == 'name_asc') {
        sort = 'name_desc';
        printMovies(sort);
    }
    else {
        sort = 'name_asc';
        printMovies(sort)
    }
});

sort_list.getElementsByTagName('a')[2].addEventListener("click", () => {
    movie_list.innerHTML = '';
    if (sort == 'age_asc') {
        sort = 'age_desc';
        printMovies(sort);
    }
    else {
        sort = 'age_asc';
        printMovies(sort)
    }
});

function printMovies(sort) {
    switch (sort) {
        case 'rank_asc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '예매율순▲';
            sort_list.getElementsByTagName('a')[1].innerHTML = '가나다순';
            sort_list.getElementsByTagName('a')[2].innerHTML = '시청등급순';
            movies.sort(function (a, b) {
                let x = a['ranking'];
                let y = b['ranking'];
                if (x < y)
                    return -1;
                if (x > y)
                    return 1;
                else
                    return 0;
            });
            break;
        case 'rank_desc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '예매율순▼';
            sort_list.getElementsByTagName('a')[1].innerHTML = '가나다순';
            sort_list.getElementsByTagName('a')[2].innerHTML = '시청등급순';
            movies.sort(function (a, b) {
                let x = a['ranking'];
                let y = b['ranking'];
                if (x < y)
                    return 1;
                if (x > y)
                    return -1;
                else
                    return 0;
            });
            break;
        case 'name_asc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '예매율순';
            sort_list.getElementsByTagName('a')[1].innerHTML = '가나다순▲';
            sort_list.getElementsByTagName('a')[2].innerHTML = '시청등급순';
            movies.sort(function (a, b) {
                let x = a['name'];
                let y = b['name'];
                if (x < y)
                    return -1;
                if (x > y)
                    return 1;
                else
                    return 0;
            });
            break;
        case 'name_desc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '예매율순';
            sort_list.getElementsByTagName('a')[1].innerHTML = '가나다순▼';
            sort_list.getElementsByTagName('a')[2].innerHTML = '시청등급순';
            movies.sort(function (a, b) {
                let x = a['name'];
                let y = b['name'];
                if (x < y)
                    return 1;
                if (x > y)
                    return -1;
                else
                    return 0;
            });
            break;
        case 'age_asc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '예매율순';
            sort_list.getElementsByTagName('a')[1].innerHTML = '가나다순';
            sort_list.getElementsByTagName('a')[2].innerHTML = '시청등급순▲';
            movies.sort(function (a, b) {
                if (a['age'] == b['age']) {
                    let x = a['name'];
                    let y = b['name'];
                    if (x < y)
                        return -1;
                    if (x > y)
                        return 1;
                    else
                        return 0;
                }
                else
                    return a['age'] - b['age'];
            });
            break;
        case 'age_desc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '예매율순';
            sort_list.getElementsByTagName('a')[1].innerHTML = '가나다순';
            sort_list.getElementsByTagName('a')[2].innerHTML = '시청등급순▼';
            movies.sort(function (a, b) {
                if (a['age'] == b['age']) {
                    let x = a['name'];
                    let y = b['name'];
                    if (x < y)
                        return 1;
                    if (x > y)
                        return -1;
                    else
                        return 0;
                }
                else
                    return b['age'] - a['age'];
            });
            break;
    }

    let ul = document.createElement('ul');
    for (const iter of movies) {
        let li = document.createElement('li');
        let img = document.createElement('img');

        switch (iter['age']) {
            case '0':
                img.src = './img/allold.png'
                break;
            case '12':
                img.src = './img/12old.png'
                break;
            case '15':
                img.src = './img/15old.png'
                break;
            case '18':
                img.src = './img/18old.png'
                break;
        }

        li.appendChild(img);
        li.innerHTML += iter['name'];
        ul.appendChild(li);
    }
    movie_list.appendChild(ul);
}
printMovies(sort);

let choseMovie;
movie_list.addEventListener("click", function (p) {
    if (p.target.tagName == 'LI') {
        if (choseMovie == undefined) {
            choseMovie = p.target;
            choseMovie.classList.add('bg_gray')
        } else {
            choseMovie.classList.remove('bg_gray');
            choseMovie = p.target;
            choseMovie.classList.add('bg_gray')
        }
    }

    movie_plz.classList.add('dp_none');
    city_list.classList.remove('dp_none');
    theater_list.classList.remove('dp_none');
});
