function skillMember() {
    var member = document.getElementById("member");
    var skill = document.getElementById("skill");
    var memberBtn = document.getElementById("memberBtn");
    var skillBtn = document.getElementById("skillBtn");
    member.style.display = "block";
    skill.style.display = "none";
    memberBtn.style.backgroundColor = "#fff";
    memberBtn.style.color = "#000";
    skillBtn.style.backgroundColor = "#000";
    skillBtn.style.color = "#fff";
}