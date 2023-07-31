function openBlock(id, arrowId) {
    let blockStyle = document.getElementById(id).style
    let imgStyle = document.getElementById(arrowId).style


    if (blockStyle.height === '64px' || !blockStyle.height) {
        blockStyle.height = '128px'; 
        imgStyle.transform = 'rotate(180deg)';
    }
    else {
        blockStyle.height = '64px';
        imgStyle.transform = 'rotate(0deg)';
    }
}

