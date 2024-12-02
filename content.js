/* PDF - toggle filter invert */
(function(){
    var L='style_PDFI',
        S='#viewerContainer>#viewer.pdfViewer>.page{filter: invert(100%)}',
        SS,
        E=document.querySelector('style[id="'+L+'"]');
    if(E){
        SS=E.disabled;
        E.disabled=(SS==true)?false:true
    }else{
        SS=document.createElement('style');
        SS.setAttribute('type','text/css');
        SS.id=L;
        SS.innerHTML=S;
        document.querySelector('head').appendChild(SS);
    }
})();
