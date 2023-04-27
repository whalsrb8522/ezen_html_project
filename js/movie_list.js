let movie_list = document.getElementById('movie_list');
let sort_list = document.getElementById('sort_list');

let movies = [
    { name: "가디언즈오브갤럭시-Volume3", age: "12" },
    { name: "슈퍼마리오브라더스", age: "0" },
    { name: "드림", age: "12" },
    { name: "존윅4", age: "18" },
    { name: "더퍼스트슬램덩크", age: "12" },
    { name: "스즈메의 문단속", age: "12" },
    { name: "2001스페이스오디세이", age: "12" },
    { name: "극장판짱구는못말려-동물소환닌자배꼽수비대", age: "0" },
    { name: "옥수역귀신", age: "15" },
    { name: "무명", age: "15" },
    { name: "리바운드", age: "12" },
    { name: "LESSERAFIMCOMEBACKSHOW-UNFORGIVENinCGV", age: "12" },
    { name: "항구의니쿠코짱!", age: "0" }
];

let sort = 'name_asc';

sort_list.getElementsByTagName('a')[0].addEventListener("click", () => {
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

sort_list.getElementsByTagName('a')[1].addEventListener("click", () => {
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
        case 'name_asc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '가나다순▲';
            sort_list.getElementsByTagName('a')[1].innerHTML = '시청등급순';
            movies.sort(function (a, b) {
                let x = a['name'];
                let y = b['name'];
                if (x < y)
                    return -1;
                if (x > y)
                    return 1;
                return 0;
            });
            break;
        case 'name_desc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '가나다순▼';
            sort_list.getElementsByTagName('a')[1].innerHTML = '시청등급순';
            movies.sort(function (a, b) {
                let x = a['name'];
                let y = b['name'];
                if (x < y)
                    return 1;
                if (x > y)
                    return -1;
                return 0;
            });
            break;
        case 'age_asc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '가나다순&nbsp;&nbsp;&nbsp;';
            sort_list.getElementsByTagName('a')[1].innerHTML = '시청등급순▲';
            movies.sort(function (a, b) {
                return a['age'] - b['age'];
            });
            break;
        case 'age_desc':
            sort_list.getElementsByTagName('a')[0].innerHTML = '가나다순&nbsp;&nbsp;&nbsp;';
            sort_list.getElementsByTagName('a')[1].innerHTML = '시청등급순▼';
            movies.sort(function (a, b) {
                return b['age'] - a['age'];
            });
            break;
    }

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

        movie_list.appendChild(li);
    }
}
printMovies(sort);