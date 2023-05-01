let cityTheater = [
    {
        city: "서울",
        theater:
            [
                "강남",
                "강변",
                "건대입구",
                "구로",
                "대학로",
                "동대문",
                "등촌",
                "명동",
                "명동역 씨네라이브러리",
                "미아",
                "방학",
                "불광",
                "상봉",
                "성신여대입구",
                "송파",
                "수유",
                "신촌아트레온",
                "씨네드쉐프 압구정",
                "씨네드쉐프 용산아이파크몰",
                "압구정",
                "여의도",
                "연남",
                "영등포",
                "왕십리",
                "용산아이파크몰",
                "중계",
                "천호",
                "청담씨네시티",
                "피카디리1958",
                "하계",
                "홍대"
            ]
    },
    {
        city: "경기", theater:
            [
                "경기광주",
                "고양백석",
                "동탄",
                "범계",
                "부천역",
                "의정부태흥",
                "의정부",
                "동수원",
                "부천",
                "Drive In 용인 크랙사이",
                "고양행신",
                "광교",
                "광교상현",
                "광명역",
                "구리",
                "기흥",
                "김포",
                "김포운양",
                "김포한강",
                "다산",
                "동백",
                "동탄역",
                "동탄호수공원",
                "배곧",
                "부천옥길",
                "북수원",
                "산본",
                "서현",
                "성남모란",
                "소풍",
                "수원",
                "스타필드시티위례",
                "시흥",
                "안산",
                "안성",
                "야탑",
                "양주옥정",
                "역곡",
                "오리",
                "오산",
                "오산중앙",
                "용인",
                "이천",
                "일산",
                "정왕",
                "파주문산",
                "파주야당",
                "판교",
                "평촌",
                "평택",
                "평택고덕",
                "평택소사",
                "포천",
                "하남미사",
                "화성봉담",
                "화정"
            ]
    },
    {
        city: "인천",
        theater: [
            "계양",
            "부평",
            "송도타입스페이스",
            "연수역",
            "인천",
            "인천가정",
            "인천논현",
            "인천도화",
            "인천시민공원",
            "인천연수",
            "인천학익",
            "주안역",
            "청라"
        ]
    },
    {
        city: "강원",
        theater: [
            "강릉",
            "기린",
            "원주",
            "원통",
            "인제",
            "춘천",
        ]
    },
    {
        city: "대전/충청",
        theater: [
            "천안펜타포트",
            "천안",
            "논산",
            "당진",
            "대전",
            "대전가수원",
            "대전가오",
            "대전탄방",
            "대전터미널",
            "서산",
            "세종",
            "아산",
            "유성노은",
            "제천",
            "천안시청",
            "천안터미널",
            "청주(서문)",
            "청주성안길",
            "청주율량",
            "청주지웰시티",
            "청주터미널",
            "충북혁신",
            "충주교현",
            "홍성"
        ]
    },
    {
        city: "대구",
        theater: [
            "대구",
            "대구수성",
            "대구스타디움",
            "대구아카데미",
            "대구연경",
            "대구월성",
            "대구한일",
            "대구현대"
        ]
    },
    {
        city: "부산/울산",
        theater: [
            "울산삼산",
            "Drive In 영도",
            "대연",
            "동래",
            "부산명지",
            "서면",
            "서면삼정타워",
            "서면상상마당",
            "센텀시티",
            "씨네드쉐프 센텀시티",
            "아시아드",
            "울산동구",
            "울산신천",
            "울산진장",
            "정관",
            "하단아트몰링",
            "해운대",
            "화명"
        ]
    },
    {
        city: "경상",
        theater: [
            "거제",
            "경산",
            "고성",
            "북포항",
            "구미",
            "김천율곡",
            "김해",
            "김해율하",
            "김해장유",
            "마산",
            "안동",
            "양산삼호",
            "진주혁신",
            "창원",
            "창원더시티",
            "창원상남"
        ]
    },
    // {
    //     city: "광주/전라/제주",
    //     theater: [
    //         "광양 엘에프스퀘어",
    //         "광양",
    //         "광주금남로",
    //         "광주상무",
    //         "광주용봉",
    //         "광주첨단",
    //         "광주충장로",
    //         "광주터미널",
    //         "광주하남",
    //         "나주",
    //         "목포",
    //         "목포평화광장",
    //         "서전주",
    //         "순천",
    //         "순천신대",
    //         "여수웅천",
    //         "익산",
    //         "전주고사",
    //         "전주에코시티",
    //         "전주효자",
    //         "정읍",
    //         "제주",
    //         "제주노형"
    //     ]
    // }
]

let city_list = document.getElementById('city_list');
let theater_list = document.getElementById('theater_list');
let theater_plz = document.getElementById('theater_plz');

function print_city() {
    let ul = document.createElement('ul');

    for (const iter of cityTheater) {
        let li = document.createElement('li');
        li.innerHTML = `${iter['city']}(${iter['theater'].length})`;
        li.id = `${iter['city']}`;
        li.addEventListener("click", print_theater);
        ul.appendChild(li)
    }
    city_list.appendChild(ul);
}
print_city();

function print_theater(e) {
    theater_list.innerHTML = '';

    for (const city of cityTheater) {
        if (city['city'] == e.target.id) {
            let ul = document.createElement('ul');

            for (const theater of city['theater']) {
                let li = document.createElement('li');
                li.innerHTML = `${theater}`;
                li.id = `${theater}`
                ul.appendChild(li)
            }

            theater_list.appendChild(ul);
            return;
        }
    }
}

let choseTheater;
theater_list.addEventListener("click", function (p) {
    if (p.target.tagName == 'LI') {
        if (choseTheater == undefined) {
            choseTheater = p.target;
            choseTheater.classList.add('bg_gray')
        } else {
            choseTheater.classList.remove('bg_gray');
            choseTheater = p.target;
            choseTheater.classList.add('bg_gray')
        }
    }

    theater_plz.classList.add('dp_none');
    calendar.classList.remove('dp_none');
});
