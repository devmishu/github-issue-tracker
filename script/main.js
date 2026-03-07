
// Global Variable
const allIssuesBtnElement = document.getElementById('all-issues-btn');
const openIssuesBtnElement = document.getElementById('open-issues-btn');
const closeIssuesBtnElement = document.getElementById('close-issues-btn');


const allIssueBtnElement = document.querySelectorAll('.all-issue-btn');
const issuesCardContainerElement = document.getElementById('issues-card-container');
issuesCardContainerElement.innerHTML = '';
const issuesNumberCountElement = document.getElementById('issues-number-count');

function init() {
    allIssuesShow();
}



// All Issues show
const allIssuesShow = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    const allIsue = data.data;

    issuesNumberCountElement.textContent = `${allIsue.length} Issues`;

    // allissus per item get
    allIsue.map(item => {

        const card = document.createElement('div');
        card.classList.add('card', 'bg-base-100', 'shadow-sm', 'w-auto');
        card.innerHTML = `
            <div class="p-5 space-y-3 border-b border-gray-300">

                <div class="card-actions justify-between">
                    <img src="./assets/Open-Status.png" alt="Open Status">

                    <div class="badge  bg-[#FEECEC]  text-[#EF4444] rounded-full uppercase font-semibold"> ${item.priority}</div>
                </div>

                <h3 class="text-[16px] mt-2 capitalize primary-color font-semibold">${item.title}</h3>
                <p class="secondary-color">${item.description}</p>

                <div class="card-actions justify-start ">

                   ${item.labels.map(lebel => {
            return `
                    <div class="badge border border-gray-200 bg-[#FEECEC]  text-[#EF4444] rounded-full uppercase py-4 font-semibold">
                        <i class="fa-solid fa-bug"></i> ${lebel}
                    </div>
                    
                         `
        }).join('')}

                    
                    

                </div>

            </div>

            <div class="mt-5 px-5 space-y-1 mb-5">
                <p class="secondary-color">${item.author}</p>
                <p class="secondary-color">${item.createdAt}</p>
            </div>
        `;
        issuesCardContainerElement.append(card);
    });

}









// all button event lissener
allIssuesBtnElement.addEventListener('click', () => {
    console.log('clicked');
    allIssuesShow();
});

openIssuesBtnElement.addEventListener('click', () => {
    issuesCardContainerElement.innerHTML = '';
    issuesNumberCountElement.innerHTML = 0;
});

closeIssuesBtnElement.addEventListener('click', () => {
    issuesCardContainerElement.innerHTML = '';
    issuesNumberCountElement.innerHTML = 0;
});


init();



/**
 * <div
        class="badge border border-[#FDE68A] bg-[#FFF8DB]  text-[#EF4444] rounded-full uppercase py-4 font-semibold"> ${lebel}
</div>
 */