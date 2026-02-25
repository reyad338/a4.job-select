let currentTab = "all";
let jobs = [
  {
    id: 1,
    company: "Google",
    location: "Dhaka",
    type: "Full-time",
    salary: "80k-100k BDT",
    description: "Develop scalable UI systems using React and modern tools.",
    status: "all"
  },
  {
    id: 2,
    company: "Microsoft",
    location: "Remote",
    type: "Full-time",
    salary: "90k-120k BDT",
    description: "Build REST APIs using Node.js and database architecture.",
    status: "all"
  },
  {
    id: 3,
    company: "BrackBank",
    location: "Remote",
    type: "Full-time",
    salary: "90k-120k BDT",
    description: "Build REST APIs using Node.js and database architecture.",
    status: "all"
  },
  {
    id: 4,
    company: "Apex",
    location: "Remote",
    type: "Full-time",
    salary: "90k-120k BDT",
    description: "Build REST APIs using Node.js and database architecture.",
    status: "all"
  },
  {
    id: 5,
    company: "Programing Hero",
    location: "Remote",
    type: "Full-time",
    salary: "90k-120k BDT",
    description: "Build REST APIs using Node.js and database architecture.",
    status: "all"
  },
  {
    id: 6,
    company: "It Sector",
    location: "Remote",
    type: "Full-time",
    salary: "90k-120k BDT",
    description: "Build REST APIs using Node.js and database architecture.",
    status: "all"
  },
  {
    id: 7,
    company: "Parlament",
    location: "Remote",
    type: "Full-time",
    salary: "90k-120k BDT",
    description: "Build REST APIs using Node.js and database architecture.",
    status: "all"
  },
  {
    id: 8,
    company: "BD calling",
    location: "Remote",
    type: "Full-time",
    salary: "90k-120k BDT",
    description: "Build REST APIs using Node.js and database architecture.",
    status: "all"
  },

];

const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");
const sectionCount = document.getElementById("sectionCount");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContainer = document.getElementById("tabContainer");

function nowJob() {

  jobContainer.innerHTML = "";

  let filtered = jobs.filter(job =>
    currentTab === "all"
      ? job.status === "all"
      : job.status === currentTab
  );

  sectionCount.innerText = filtered.length + " Jobs";
  emptyState.classList.toggle("hidden", filtered.length !== 0);

  filtered.forEach(job => {

    let card = document.createElement("div");
    card.className = "bg-white p-5 rounded-lg shadow flex flex-col justify-between";

    card.innerHTML = `
            <div>
              <p class="text-gray-600">${job.company}</p>
                <p class="text-sm text-gray-500">${job.location} • ${job.type}</p>
                <p class="text-sm font-medium text-blue-600 mt-1">${job.salary}</p>
                <p class="text-sm text-gray-600 mt-2">${job.description}</p>
            </div>
            <div class="flex gap-2 mt-4">
                <button data-action="interview" data-id="${job.id}" class="action-btn flex-1 bg-green-500 text-white py-2 rounded">
                    Interview
                </button>
                <button data-action="rejected" data-id="${job.id}" class="action-btn flex-1 bg-red-500 text-white py-2 rounded">
                    Rejected
                </button>
                <button data-action="delete" data-id="${job.id}" class="action-btn bg-gray-200 px-3 rounded hover:bg-gray-300">
                    <i class="fa-solid fa-trash "></i>
                </button>
            </div>
        `;

    jobContainer.appendChild(card);
  });

  upDsBoard();
}

function upStatus(id, status) {
  jobs = jobs.map(job =>
    job.id === id ? { ...job, status } : job
  );
  nowJob();
}

function deleteJob(id) {
  jobs = jobs.filter(job => job.id !== id);
  nowJob();
}

function upDsBoard() {
  document.getElementById("allCount").innerText =
    jobs.filter(j => j.status === "all").length;

  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;

  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;
}

tabContainer.addEventListener("click", function (e) {

  if (e.target.classList.contains("tab-btn")) {

    currentTab = e.target.dataset.tab;

    tabButtons.forEach(btn =>
      btn.classList.remove("border-blue-600", "font-medium", "border-b-2")
    );

    e.target.classList.add("border-blue-600", "font-medium", "border-b-2");

    nowJob();
  }
});

jobContainer.addEventListener("click", function (e) {

  let button = e.target.closest(".action-btn");
  if (!button) return;

  let id = parseInt(button.dataset.id);
  let action = button.dataset.action;

  if (action === "delete") {
    deleteJob(id);
  } else {
    upStatus(id, action);
  }
});

nowJob();

