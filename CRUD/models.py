from django.db import models

class ProgrammingSkills(models.Model):
    # id = models.BigAutoField(primary_key=True)
    language_name = models.CharField(max_length=100)
    proficiency = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'programming_skills'


    

    def __str__(self):
        return self.language_name