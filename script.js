const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`#contentM`)
sr.reveal(`#contentL`, {origin: 'bottom', delay: 600, interval: 100})
sr.reveal(`#contentR`, {origin: 'bottom', delay: 600, interval: 100})
sr.reveal(`#skillsL`, {origin: 'bottom', delay: 600, interval: 100})
sr.reveal(`#skillsR`, {origin: 'bottom', delay: 600, interval: 100})