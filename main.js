const linksSocialMedia = {
  github: 'Fernando-Sanchetta',
  youtube: 'channel/UCkD5YLk9R_O1HxduCFw2Frg',
  facebook: 'fernando.sanchetta',
  instagram: 'fsanchetta',
  twitter: 'FSanchetta'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
