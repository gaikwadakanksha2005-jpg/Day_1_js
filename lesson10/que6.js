function toggleButton(selector){
    const button=document.querySelector(selector);
    if (!button.clasList.constains('.is-toggled')){
        button.clasList.add('is-toggled');
    }else{
        button.clasList.remove('is-toggled')
    }
}