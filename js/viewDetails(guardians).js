document.getElementById('trailerimgId1').addEventListener('click', ()=>{
        console.log('asd');
        const playVideo = document.getElementById('hiddenDiv');//URL, 제목, 사진 수정하기
        playVideo.innerHTML = `         <div id="hiddenContent">
        <div id="hiddenBox">
            <h1><span id="hiddenTrailerTextTitle1">HD</span> [가디언즈 오브 갤럭시-Volume 3]Team '가디언즈'가 맞설 마지막 미션!</h1>
            <span class="material-symbols-outlined" id="closeBtn">
                close
                </span>
                    <video id="firstVideo" src="http://h.vod.cgv.co.kr/vodCGVa/86883/86883_214491_1200_128_960_540.mp4" autoplay controls></video>
                    <img class="mainImg" src="./img/Guardians.jpg" alt="">
                <span id="videoText"><span id="videoTextTitle">가디언즈 오브 갤럭시-Volume 3
                </span><br>
                액션<br>
                2023.05.03 개봉</span>
        </div>
    </div>`;
    document.getElementById('closeBtn').addEventListener('click', ()=>{
        const playVideo = document.getElementById('hiddenDiv');        
            playVideo.innerHTML = '';
        })
})
document.getElementById('trailerimgId2').addEventListener('click', ()=>{
        
    const playVideo = document.getElementById('hiddenDiv');
    playVideo.innerHTML = `         <div id="hiddenContent">
    <div id="hiddenBox">
        <h1><span id="hiddenTrailerTextTitle1">HD</span> [가디언즈 오브 갤럭시-Volume 3]돌아온 가디언즈 30초 예고편</h1>
        <span class="material-symbols-outlined" id="closeBtn">
            close
            </span>
                <video id="firstVideo" src="http://h.vod.cgv.co.kr/vodCGVa/86883/86883_213584_1200_128_960_540.mp4" autoplay controls></video>
                <img class="mainImg" src="./img/Guardians.jpg" alt="">
                <span id="videoText"><span id="videoTextTitle">가디언즈 오브 갤럭시-Volume 3
                </span><br>
                액션<br>
                2023.05.03 개봉</span>
    </div>
</div>`;
document.getElementById('closeBtn').addEventListener('click', ()=>{
    const playVideo = document.getElementById('hiddenDiv');        
        playVideo.innerHTML = '';
    })
})
document.getElementById('trailerimgId3').addEventListener('click', ()=>{
        
    const playVideo = document.getElementById('hiddenDiv');
    playVideo.innerHTML = `         <div id="hiddenContent">
    <div id="hiddenBox">
        <h1><span id="hiddenTrailerTextTitle1">HD</span> [가디언즈 오브 갤럭시-Volume 3]메인 예고편</h1>
        <span class="material-symbols-outlined" id="closeBtn">
            close
            </span>
                <video id="firstVideo" src="http://h.vod.cgv.co.kr/vodCGVa/86883/86883_212680_1200_128_960_540.mp4" autoplay controls></video>
                <img class="mainImg" src="./img/Guardians.jpg" alt="">
                <span id="videoText"><span id="videoTextTitle">가디언즈 오브 갤럭시-Volume 3
                </span><br>
                액션<br>
                2023.05.03 개봉</span>
    </div>
</div>`;
document.getElementById('closeBtn').addEventListener('click', ()=>{
    const playVideo = document.getElementById('hiddenDiv');        
        playVideo.innerHTML = '';
    })
})

let cnt=1;
document.getElementById('btn1').addEventListener('click', ()=>{
    if(cnt==1){
        return;
    }else{
        cnt--;
        document.getElementById('img').setAttribute('src', `./img/GuardiansImg${cnt}.jpg`);
        console.log('asd');
    }
    document.getElementById('imgTextValue').innerText = `${cnt}`;
})
document.getElementById('btn2').addEventListener('click', ()=>{
    if(cnt==6){
        return;
    }else{
        cnt++;
        document.getElementById('img').setAttribute('src', `./img/GuardiansImg${cnt}.jpg`);
        console.log('asd');
    }
    document.getElementById('imgTextValue').innerText = `${cnt}`;
})
document.getElementById('newFilter').addEventListener('click', ()=>{
    document.getElementById('newFilter').style.color = `rgb(255, 134, 140)`;
    document.getElementById('bestFilter').style.color = ``;
})
document.getElementById('bestFilter').addEventListener('click', ()=>{
    console.log('asd');
    document.getElementById('bestFilter').style.color = `rgb(255, 134, 140)`;
    document.getElementById('newFilter').style.color = ``;
})