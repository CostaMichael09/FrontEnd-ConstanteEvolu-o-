const color = {
    p: 'blue',
    div: 'orange',
    ul: 'brown',
    ol: 'gray',
    form: 'white',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}





document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = color.get(tagName)
    
    if (!box.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = color.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})