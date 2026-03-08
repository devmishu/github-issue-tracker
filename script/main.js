
// Global Variable
const allIssuesBtnElement = document.getElementById('all-issues-btn');
const openIssuesBtnElement = document.getElementById('open-issues-btn');
const closeIssuesBtnElement = document.getElementById('close-issues-btn');

const searchFieldInput = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const spinnerElement = document.getElementById('spinner');

const allIssueBtnElement = document.querySelectorAll('.all-issue-btn');
const issuesCardContainerElement = document.getElementById('issues-card-container');
issuesCardContainerElement.innerHTML = '';
const issuesNumberCountElement = document.getElementById('issues-number-count');



// show loading function
const showLoading = () => {
    spinnerElement.classList.remove('hidden');
    spinnerElement.classList.add('flex');
}

// hide loading function
const hideLoading = () => {
    spinnerElement.classList.add('hidden');
}



// All Issues show
const allIssuesShow = async () => {
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    const allIsue = data.data;


    issuesNumberCountElement.textContent = `${allIsue.length} Issues`;

    // allissus per item get
    allIsue.map(item => {
        let date = new Date(item.createdAt).toLocaleDateString();
        let statusImg = '';
        let priorityClass = '';

        const card = document.createElement('div');
        card.classList.add('card', 'bg-base-100', 'shadow-sm', 'w-auto', 'border-t-5');
        card.onclick = () => modalShow(item.id);

        if (item.status === 'open') {
            card.classList.add('border-green-700');
            statusImg = './assets/Open-Status.png'
        } else {
            card.classList.add('border-purple-700');
            statusImg = './assets/Closed- Status .png'
        }

        if (item.priority === 'high') {
            priorityClass = 'high';
        } else if (item.priority === 'medium') {
            priorityClass = 'medium';
        } else {
            priorityClass = 'low';
        }

        card.innerHTML = `
            <div class="p-5 space-y-3 border-b border-gray-300">

                <div  class=" card-actions justify-between">
                
                    <div>
                        <img class="issue-status" src="${statusImg}" alt="Open Status">
                    </div>

                    <div class="badge ${priorityClass} py-1 px-5 rounded-full uppercase font-semibold"> ${item.priority}</div>
                </div>

                <h3 onclick="modalShow(${item.id})" class="text-[16px] mt-2 capitalize primary-color font-semibold hover:cursor-pointer">${item.title}</h3>
                <p class="secondary-color">${item.description}</p>

                <div class="card-actions justify-start ">

                   ${item.labels.map(lebel => {
            return `
                    <div class="highlight">
                        ${lebel}
                    </div>
                    
                         `
        }).join('')}

                    
                    

                </div>

            </div>

            <div class="mt-5 px-5 space-y-1 mb-5">
                <p class="secondary-color">${item.author}</p>
                <p class="secondary-color">${date}</p>
            </div>
        `;
        issuesCardContainerElement.append(card);
    });
    hideLoading();

}

// open Issues show
const openIssuesShow = async () => {
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    const allIsue = data.data;

    let openCardCount = 0;

    // allissus per item get
    allIsue.map(item => {
        let date = new Date(item.createdAt).toLocaleDateString();
        let priorityClass = '';
        let statusImg = '';


        const card = document.createElement('div');
        card.classList.add('card', 'bg-base-100', 'shadow-sm', 'w-auto', 'border-t-5');
        card.onclick = () => modalShow(item.id);

        if (item.status === 'open') {
            card.classList.add('border-green-700');
            statusImg = './assets/Open-Status.png'
        }

        if (item.priority === 'high') {
            priorityClass = 'high';
        } else if (item.priority === 'medium') {
            priorityClass = 'medium';
        } else {
            priorityClass = 'low';
        }


        card.innerHTML = `
            <div class="p-5 space-y-3 border-b border-gray-300">

                <div class="card-actions justify-between">
                    <img src="${statusImg}" alt="Open Status">

                    <div class="badge ${priorityClass} py-1 px-5  bg-[#FEECEC]  text-[#EF4444] rounded-full uppercase font-semibold"> ${item.priority}</div>
                </div>

                <h3 onclick="modalShow(${item.id})" class="text-[16px] mt-2 capitalize primary-color font-semibold hover:cursor-pointer">${item.title}</h3>
                <p class="secondary-color">${item.description}</p>

                <div class="card-actions justify-start ">

                   ${item.labels.map(lebel => {
            return `
                    <div class="highlight">
                        ${lebel}
                    </div>
                    
                         `
        }).join('')}

                    
                    

                </div>

            </div>

            <div class="mt-5 px-5 space-y-1 mb-5">
                <p class="secondary-color">${item.author}</p>
                <p class="secondary-color">${date}</p>
            </div>
        `;
        if (item.status === 'open') {
            issuesCardContainerElement.append(card);
            openCardCount++;
        }
    });

    issuesNumberCountElement.textContent = `${openCardCount} Issues`;

    hideLoading();
}

// close Issues show
const closeIssuesShow = async () => {

    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    const allIsue = data.data;
    let closeCardCount = 0;


    // allissus per item get
    allIsue.map(item => {
        showLoading();
        let date = new Date(item.createdAt).toLocaleDateString();
        let priorityClass = '';
        let statusImg = '';


        const card = document.createElement('div');
        card.classList.add('card', 'bg-base-100', 'shadow-sm', 'w-auto', 'border-t-5');
        card.onclick = () => modalShow(item.id);

        if (item.status === 'closed') {
            card.classList.add('border-purple-700');
            statusImg = './assets/Closed- Status .png'
        }

        if (item.priority === 'high') {
            priorityClass = 'high';
        } else if (item.priority === 'medium') {
            priorityClass = 'medium';
        } else {
            priorityClass = 'low';
        }

        card.innerHTML = `
            <div class="p-5 space-y-3 border-b border-gray-300">

                <div class="card-actions justify-between">
                    <img src="${statusImg}" alt="Open Status">

                    <div class="badge  bg-[#FEECEC]  text-[#EF4444] rounded-full uppercase font-semibold"> ${item.priority}</div>
                </div>

                <h3 onclick="modalShow(${item.id})" class="text-[16px] mt-2 capitalize primary-color font-semibold hover:cursor-pointer">${item.title}</h3>
                <p class="secondary-color">${item.description}</p>

                <div class="card-actions justify-start ">

                   ${item.labels.map(lebel => {

            return `
                    <div class="highlight">
                        ${lebel}
                    </div>
                    
                         `
        }).join('')}

                    
                    

                </div>

            </div>

            <div class="mt-5 px-5 space-y-1 mb-5">
                <p class="secondary-color">${item.author}</p>
                <p class="secondary-color">${date}</p>
            </div>
        `;
        if (item.status === 'closed') {
            closeCardCount++;
            issuesCardContainerElement.append(card);
        }
    });

    issuesNumberCountElement.textContent = `${closeCardCount} Issues`;
    hideLoading();
}

// search issue
const searchIssue = async () => {
    showLoading();
    const searchText = searchFieldInput.value.trim().toLowerCase();
    console.log(searchText);
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`);
    const data = await res.json();
    const searchResult = data.data;

    searchResult.map(item => {
        let date = new Date(item.createdAt).toLocaleDateString();
        let statusImg = '';
        let priorityClass = '';

        const card = document.createElement('div');
        card.classList.add('card', 'bg-base-100', 'shadow-sm', 'w-auto', 'border-t-5');
        card.onclick = () => modalShow(item.id);

        if (item.status === 'open') {
            card.classList.add('border-green-700');
            statusImg = './assets/Open-Status.png'
        } else {
            card.classList.add('border-purple-700');
            statusImg = './assets/Closed- Status .png'
        }

        if (item.priority === 'high') {
            priorityClass = 'high';
        } else if (item.priority === 'medium') {
            priorityClass = 'medium';
        } else {
            priorityClass = 'low';
        }

        card.innerHTML = `
            <div class="p-5 space-y-3 border-b border-gray-300">

                <div  class=" card-actions justify-between">
                
                    <div>
                        <img class="issue-status" src="${statusImg}" alt="Open Status">
                    </div>

                    <div class="badge ${priorityClass}  bg-[#FEECEC]  text-[#EF4444] rounded-full uppercase font-semibold"> ${item.priority}</div>
                </div>

                <h3 onclick="modalShow(${item.id})" class="text-[16px] mt-2 capitalize primary-color font-semibold hover:cursor-pointer">${item.title}</h3>
                <p class="secondary-color">${item.description}</p>

                <div class="card-actions justify-start ">

                   ${item.labels.map(lebel => {
            return `
                    <div class="highlight">
                        ${lebel}
                    </div>
                    
                         `
        }).join('')}

                    
                    

                </div>

            </div>

            <div class="mt-5 px-5 space-y-1 mb-5">
                <p class="secondary-color">${item.author}</p>
                <p class="secondary-color">${date}</p>
            </div>
        `;
        issuesCardContainerElement.append(card);
    });

    issuesNumberCountElement.innerHTML = `${searchResult.length} Issues were found for: ${searchText}`;
    if (searchResult.length === 0) {

        issuesCardContainerElement.innerHTML = `
              <div class="col-span-4 text-3xl sm:text-4xl  font-bold text-center py-20 px-5">
                  <p>No issues found</p>
              </div>
        `;

    }
    hideLoading();
}

// modalShow function
const modalShow = async (id) => {
    const issueDetailModalElement = document.getElementById('issue-detail-modal');
    issueDetailModalElement.showModal();

    const modalContent = document.getElementById('modal-content');


    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const data = await res.json();
    const modalDetail = data.data;
    console.log(modalDetail);
    let date = new Date(modalDetail.createdAt).toLocaleDateString();
    let priorityClass = '';
    if (modalDetail.priority === 'high') {
        priorityClass = 'high';
    } else if (modalDetail.priority === 'medium') {
        priorityClass = 'medium';
    } else {
        priorityClass = 'low';
    }

    modalContent.innerHTML = `
         <div  class="p-5 space-y-3">

                        <h3 class="text-2xl font-bold mt-2 capitalize primary-color ">${modalDetail.title}</h3>

                        <div class="card-actions items-center justify-start">
                            <div class="badge  bg-green-700  text-white rounded-full  font-medium p-4 ">
                                ${modalDetail.status}</div>
                            <div class="flex items-center justify-center gap-1 secondary-color"> <span
                                    class="block bg-green-700 rounded-full w-[6px] h-[6px] "></span>${modalDetail.author}
                            </div>

                            <div class="flex items-center justify-center gap-1 secondary-color"> <span
                                    class="block bg-green-700 rounded-full w-[6px] h-[6px] "></span>${date}</div>
                        </div>

                        <div class="card-actions justify-start ">
                            ${modalDetail.labels.map(lebel => {
        return `
                                    <div class="highlight">
                                      </i> ${lebel}
                                    </div>
                    
                         `
    }).join('')}

                        </div>
                        

                        <p class="secondary-color">${modalDetail.description}</p>

                        <div class="mt-5 mb-5 bg-[#F8FAFC] p-4 rounded-sm flex justify-start items-center gap-40">
                            <div>
                                <p class="secondary-color">Assignee:</p>
                                <p class="primary-color  font-semibold">${modalDetail.assignee}</p>
                            </div>
                            <div>
                                <p class="secondary-color">Priority:</p>
                                <div class="badge ${priorityClass}  bg-red-600  text-white rounded-full uppercase font-medium py-3">
                                    ${modalDetail.priority}</div>
                            </div>
                        </div>
                    </div>
    `;
}




// all button event lissener
allIssuesBtnElement.addEventListener('click', () => {
    issuesCardContainerElement.innerHTML = '';
    // issuesNumberCountElement.innerHTML = 0;
    allIssuesShow();
    allIssueBtnElement.forEach(item => {
        item.classList.remove('active');
    });
    allIssuesBtnElement.classList.add('active');

});

openIssuesBtnElement.addEventListener('click', () => {
    issuesCardContainerElement.innerHTML = '';
    // issuesNumberCountElement.innerHTML = 0;
    openIssuesShow();

    allIssueBtnElement.forEach(item => {
        item.classList.remove('active');
    });
    openIssuesBtnElement.classList.add('active');
});

closeIssuesBtnElement.addEventListener('click', () => {
    issuesCardContainerElement.innerHTML = '';
    // issuesNumberCountElement.innerHTML = 0;
    closeIssuesShow();
    allIssueBtnElement.forEach(item => {
        item.classList.remove('active');
    });
    closeIssuesBtnElement.classList.add('active');
});

searchBtn.addEventListener('click', () => {
    issuesCardContainerElement.innerHTML = '';
    searchIssue();
    allIssueBtnElement.forEach(item => {
        item.classList.remove('active');
    });
});

allIssuesShow();
