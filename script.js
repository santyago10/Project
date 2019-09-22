let people=[ 
	{ 
		"id": 2, 
		"url": "https://a.wattpad.com/cover/101598820-288-k582048.jpg",
		"name": "Вася"
	}, 
	{ 
		"id": 1, 
		"url": "https://cs7.pikabu.ru/post_img/big/2018/07/17/8/1531833728129319373.jpg",
		"name": "Марго"
	}, 
	{ 
		"id": 4, 
		"url": "http://www.xa-xa.org/uploads/posts/2010-09/1285791620_1285707391_1.jpg",
		"name": "Розо"
	}, 
	{ 
		"id": 3, 
		"url": "https://f1.upet.com/DFOwu1HYVC.jpg",
		"name": "Макс"
	}, 
	{ 
		"id": 6, 
		"url": "https://cs4.pikabu.ru/post_img/2016/01/07/8/1452170055137768324.jpg",
		"name": "Борис"
	}, 
	{ 
		"id": 5, 
		"url": "https://cs.pikabu.ru/post_img/2013/12/09/7/1386586596_1922159988.jpg",
		"name": "Супакэт"
	}
];

let list=document.getElementById("list");

for(let i=0;i<people.length;i++){
    list.innerHTML=list.innerHTML+`<li class=innerList><img src="${people[i].url}"/>
    <p class=caption>${people[i].name}</p></li>`;
}

let items=document.querySelectorAll(".innerList");

let selectedItem;

//Функция активности элемента
$(function(){
    $('body').on('click','li.innerList',function(e){
        let check;

        for(let i=0;i<items.length;i++){
            for(let i=0;i<people.length;i++){
                //Проверяем внутренния текст выбранного элемента с именем в массиве
                //и, если совпадает, присваиваем переменной selectedItem ID выбранного элемента
                if(e.currentTarget.innerText==people[i].name){
                    selectedItem=people[i].id;
                }
                //Проверяем есть ли подстрока выбранного элемента во внутреннем коде каждого 
                //элемента на странице
                check=items[i].innerHTML.indexOf(e.currentTarget.innerText)
                if(check==-1)
                items[i].classList.remove("active");
                else
                items[i].classList.add("active");
                
            }
        }
    });   
});


showID=(e)=>{
    if(selectedItem===undefined){
        //Если элемент не выбран, выводится сообщение
        alert("Please, select a fighter");
    }
    else
    alert(selectedItem);
}

    


