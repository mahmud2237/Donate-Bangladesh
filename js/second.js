document.getElementById('btn-history').addEventListener('click', function(){
    // show history section
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden');
    
})
document.getElementById('btn-donation').addEventListener('click', function(){
    // show donation section
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden');
    
})
document.getElementById('btn-blog').addEventListener('click', function(){
    // show blog section
    document.getElementById('blog-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    
})