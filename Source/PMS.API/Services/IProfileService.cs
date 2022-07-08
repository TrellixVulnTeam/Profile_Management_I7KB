using PMS_API;

namespace PMS_API
{
    public interface IProfileService
    {
        public double calculateExperience(int id);
        bool AddProfile(Profile profile);
        bool AddPersonalDetail(PersonalDetails personalDetails);
        IEnumerable<PersonalDetails> GetAllPersonalDetails();
        object GetPersonalDetailsById(int Personalid);
        PersonalDetails GetPersonalById(int Personalid);
        bool UpdatePersonalDetail(PersonalDetails personalDetails);
        bool DisablePersonalDetails(int PersonalDetailsid);

        bool AddEducation(Education education);
        IEnumerable<Education> GetallEducationDetails();
        object GetEducationDetailsById(int Educationid);
        bool UpdateEducation(Education education);
        bool DisableEducationalDetails(int Educationid);

        bool AddProjects(Projects project);
        IEnumerable<Projects> GetallProjectDetails();
        object GetProjectDetailsById(int Projectid);
        bool UpdateProjects(Projects projects);
        bool DisableProjectDetails(int Projectid);

        bool AddSkills(Skills skill);
        IEnumerable<Skills> GetallSkillDetails();
        object GetSkillDetailsById(int Skillid);
        bool UpdateSkills(Skills skill);
        bool DisableSkillDetails(int Skillid);

        bool AddAchievements(Achievements achievements);
        IEnumerable<Achievements> GetallAchievements();

        bool DisableAchievement(int AchievementId);

        bool AddBreakDuration(BreakDuration duration);
        bool DisableBreakDuration(int BreakDurationid);

        bool AddLanguage(Language language);
        bool DisableLanguage(int Languageid);

        bool AddSocialMedia(SocialMedia media);
        bool DisableSocialMedia(int SocialMediaid);

        public object GetPersonalDetailsByProfileId(int Profileid);
        public IEnumerable<Object> GetAllEducationDetailsByProfileId(int Profileid);
        public IEnumerable<Object> GetAllProjectDetailsByProfileId(int Profileid);
        public IEnumerable<Object> GetAllSkillDetailsByProfileId(int Profileid);
        public IEnumerable<Object> GetAllAchievementDetailsByProfileId(int Profileid);
        object GetTechnologyById(int Technologyid);
        IEnumerable<Technology> GetallTechnologies();

        object GetProfileById(int Profileid);
        object GetProfileIdByUserId(int Userid);
        public IEnumerable<Profile> GetallProfiles();

        public bool AddProfileHistory(ProfileHistory profilehistory);
        public IEnumerable<object> GetProfileHistoryById(int ProfileId);
        public IEnumerable<object> GetallProfileHistories();
        
        // public bool RequestToUpdate()
        // public bool Download(int ProfileId)

        //public bool Share(List<string> Tomail,string message);

      public object GetProfileCount();
    }
}