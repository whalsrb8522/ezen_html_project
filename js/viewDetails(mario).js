document.getElementById('trailerimgId1').addEventListener('click', ()=>{
        
        const playVideo = document.getElementById('hiddenDiv');
        playVideo.innerHTML = `         <div id="hiddenContent">
        <div id="hiddenBox">
            <h1><span id="hiddenTrailerTextTitle1">HD</span> [슈퍼 마리오 브라더스]'크리스 프랫 Is 마리오 그 잡채' 영상</h1>
            <span class="material-symbols-outlined" id="closeBtn">
                close
                </span>
                    <video id="firstVideo" src="http://h.vod.cgv.co.kr:80/vodCGVa/86341/86341_214416_1200_128_960_540.mp4" autoplay controls></video>
                    <img class="mainImg" src="./img/슈퍼마리오브라더스.jpg" alt="">
                <span id="videoText"><span id="videoTextTitle">슈퍼 마리오 브라더스</span><br>
                    애니메이션, 코미디<br>
                    2023.04.26 개봉</span>
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
        <h1><span id="hiddenTrailerTextTitle1">HD</span> [슈퍼 마리오 브라더스]'저희 영화 자랑 좀 할게요' 영상</h1>
        <span class="material-symbols-outlined" id="closeBtn">
            close
            </span>
                <video id="firstVideo" src="http://h.vod.cgv.co.kr/vodCGVa/86341/86341_214286_1200_128_960_540.mp4" autoplay controls></video>
                <img class="mainImg" src="./img/슈퍼마리오브라더스.jpg" alt="">
            <span id="videoText"><span id="videoTextTitle">슈퍼 마리오 브라더스</span><br>
                애니메이션, 코미디<br>
                2023.04.26 개봉</span>
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
        <h1><span id="hiddenTrailerTextTitle1">HD</span> [슈퍼 마리오 브라더스]'피치' 갓벽한 액션폼 영상</h1>
        <span class="material-symbols-outlined" id="closeBtn">
            close
            </span>
                <video id="firstVideo" src="http://h.vod.cgv.co.kr/vodCGVa/86341/86341_214285_1200_128_960_540.mp4" autoplay controls></video>
                <img class="mainImg" src="./img/슈퍼마리오브라더스.jpg" alt="">
            <span id="videoText"><span id="videoTextTitle">슈퍼 마리오 브라더스</span><br>
                애니메이션, 코미디<br>
                2023.04.26 개봉</span>
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
        document.getElementById('img').setAttribute('src', `./img/marioImg${cnt}.jpeg`);
        console.log('asd');
    }
    document.getElementById('imgTextValue').innerText = `${cnt}`;
})
document.getElementById('btn2').addEventListener('click', ()=>{
    if(cnt==6){
        return;
    }else{
        cnt++;
        document.getElementById('img').setAttribute('src', `./img/marioImg${cnt}.jpeg`);
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