const url='https://mocki.io/v1/c0675b54-b231-45a4-b31f-cbe030e44224';

fetch(url).then((res)=>res.json()).then(data => display(data))

function display(books){

    const container= document.querySelector('.container')

    books.forEach(book=>{
        const {img,title,Author,Mrp,Dp}=book;

        container.innerHTML += 
`
<div class='flex flex-col items-center p-5 border rounded-lg m-3 drop-shadow-2xl'>
<img class='h-32 rounded-xl drop-shadow-sm' src=${img} alt='book image'/>
<h1 class='font-bold font-serif pt-2'>${title}</h1>
<div class='flex justify-between '>
<p class='pr-3 text-violet-800'>₹${Dp}</p>
<p class='text-red-500 line-through'>${Mrp}</p>
</div>

<button class='bg-orange-500 border rounded-lg pt-3 pb-3 pr-6 pl-6 buynow'>Buy now</button>
</div>
`
    })

    cart()
}

function cart(){
    const buynow= document.querySelectorAll('.buynow')
    const myCart=[];
    
    buynow.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            myCart.push(btn.parentNode)
            console.log(myCart)
            //cart is added to
})
})
}

