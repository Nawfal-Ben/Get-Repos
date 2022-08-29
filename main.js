// Variables
const userName = document.querySelector("input[name='user-name']")
const getRepoBtn = document.querySelector(".user-input button")
const reposBox = document.querySelector(".repos")


getRepoBtn.addEventListener("click", () => {
    if (userName.value) {

        fetch(`https://api.github.com/users/${userName.value}/repos`)
            .then(response => response.json())
            .then(repos => {
                
                reposBox.innerHTML = ""
                repos.forEach(repo => {
                    reposBox.innerHTML += `<div class="repo">
                                            ${repo.name}
                                            <div>
                                                <span class="stars">Stars ${repo.stargazers_count}</span>
                                                <a href="${repo.html_url}" target="_blank">Visit</a>
                                            </div>
                                        </div>`
                });
    
            })
            .catch(() => reposBox.innerHTML = "The user name doesn't exist")
    
    } else {
        reposBox.innerHTML = "Please Enter your user name"
    }
})