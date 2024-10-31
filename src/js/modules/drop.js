//create drag and drop module with all eight functionality
const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    };

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0,0.7)';
    };

    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';    
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    };

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = "..." : dots = '.';  // 6 - max count of dots     
            const name = arr[0].substring(0, 6) + dots + arr[1]; // 6 - max count of symbols after dot
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;