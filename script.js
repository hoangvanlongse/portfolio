const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    tabs.forEach(tab => {
        tab.classList.remove("active");
        if (tab.getAttribute("href").includes(current)) {
            tab.classList.add("active");
        }
    });
});

const projectData = [
    {
        title: "OCBS Invest",
        description: "Full production-ready microservice architecture.",
        features: [
            "Delivered 2 services and 8+ features to production",
            "Maintained and debugged legacy systems across Linux environments",
            "Designed internal modules online survey, e-sign service",
            "Wrote ERD, architecture diagrams and API documentation",
        ]
    },
    {
        title: "Online chat",
        description: "Wait 30 seconds, open 2 tab, rename them and chat with each other.",
        features: [
            // "API Gateway + JWT Authentication",
            // "Kafka event-driven communication",
            // "Redis caching",
            // "OpenTelemetry tracing",
            // "Kubernetes deployment"
        ]
    },
    {
        title: "Intelligent Tutoring System",
        description: "",
        features: [
            "API Gateway + JWT Authentication",
            "Kafka event-driven communication",
            "Redis caching",
            "OpenTelemetry tracing",
            "Kubernetes deployment"
        ]
    },
    {
        title: "Payment Processing System",
        description: "Reliable and safe transaction processing system.",
        features: [
            "Resilience4j circuit breaker",
            "Retry mechanism",
            "Transactional consistency"
        ]
    }
];

function openModal(index) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").innerText = projectData[index].title;
    document.getElementById("modal-description").innerText = projectData[index].description;

    const featureList = document.getElementById("modal-features");
    featureList.innerHTML = "";

    projectData[index].features.forEach(feature => {
        const li = document.createElement("li");
        li.innerText = feature;
        featureList.appendChild(li);
    });

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};