// Seleksi terlebih dahulu <body>
var body = document.body;

// Karena <div id="main"> berada di dalam body dengan posisi pertama, maka seleksi <div id="main"> dengan ambil children pertama (indeks 0).
var bodyChilds = body.children[0];

// Buat <div> menggunakan createElement
var contentDiv = document.createElement('div');

// Buat attribute id
var contentDivAttrId = document.createAttribute('id');

// Memberikan nilai kepada id dengan nama "content" --> menjadi id="content"
contentDivAttrId.value = "content";

// Menambahkan attribute id="content" ke contentDiv
contentDiv.setAttributeNode(contentDivAttrId);

// Meletakkan <div id="content"> di dalam  <div id="main">
bodyChilds.appendChild(contentDiv);

// Membuat array untuk Judul dan Tanggal <dibatasi dengan 2 judul dan tanggal>
var arrJudul 	= ['Judul Post', 'Judul Post 2'];
var arrTanggal 	= ['12 May 2016', '13 May 2016'];


for(i=0; i<2; i++) {
	//Buat  <div class="content-post">
	var contentPostDiv = document.createElement('div');
	contentPostDiv.setAttribute('class', 'content-post');	
	contentDiv.appendChild(contentPostDiv); //Meletakan <div class="content-post"> di dalam <div id="content">


	//Buat tag h1
	var h1 = document.createElement('h1');
	var h1Text = document.createTextNode(arrJudul[i]); //Membuat teks untuk <h1></h1> dengan mengambil data dari array <arrJudul> 	
	h1.appendChild(h1Text); //Meletakkan teks <h1Text> di antara <h1>
	contentPostDiv.appendChild(h1); //Meletakkan tag <h1> di dalam <div class="content-post">

	//Buat tag span
	var span = document.createElement('span'); 
	var spanText = document.createTextNode('Published on ' + arrTanggal[i]); //Membuat teks untuk tag <span> dengan mengambil data dari array <arrTanggal> 	
	span.appendChild(spanText); //Meletakkan teks <spanText> di antara tag <span>
	contentPostDiv.appendChild(span); //Meletakkan tag <span> di dalam <div class="content-post">

	//Buat tag p
	var p = document.createElement('p');
	var pText = document.createTextNode('Lorem Ipsum Dolor Sit Amet'); //Membuat teks "Lorem Ipsum Dolor Sit Amet" untuk tag <p></p> 
	p.appendChild(pText); //Meletakkan teks <pText> di antara tag <p> 
	contentPostDiv.appendChild(p); //Meletakkan tag <p> di dalam <div class="content-post">

	//Buat tag button
	var button = document.createElement('button'); 
	button.setAttribute('class', 'share-post-btn'); //Membuat dan menyatukan <button class="share-post-btn">

	var buttonText = document.createTextNode('Share this Post'); //Membuat teks "Share this Post" 
	button.appendChild(buttonText);  //Meletakkan teks "Share this Post" di antara <button class="share-post-btn">

	//Membuat fungsi alert ketika klik button
	button.addEventListener('click', function() {
		alert('You have shared this post!');
	});

	contentPostDiv.appendChild(button); //Meletakkan <button class="share-post-btn"> di dalam  <div class="content-post">
}



