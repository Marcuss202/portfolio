from django.db import models

class ProgrammingSkills(models.Model):
    language_name = models.CharField(max_length=100)
    proficiency = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'programming_skills'

    def __str__(self):
        return self.language_name

class PersonalProjects(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    description = models.TextField(blank=True, null=True)
    Html_desc = models.TextField(blank=True, null=True)
    github_link = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'personal_projects'
    

    def __str__(self):
        return self.title