USE [master]

IF db_id('PathfinderSheets') IS NULL
CREATE DATABASE [PathfinderSheets]
GO

USE [PathfinderSheets]
GO

DROP TABLE IF EXISTS [CharacterSheet];
DROP TABLE IF EXISTS [Race];
DROP TABLE IF EXISTS [Class];
DROP TABLE IF EXISTS [Alignment];
DROP TABLE IF EXISTS [UserProfile];
GO

CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY,
  [FirebaseUserId] NVARCHAR(28) NOT NULL,
  [DisplayName] nvarchar(50) NOT NULL,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [Email] nvarchar(555) NOT NULL,
  [CreateDateTime] datetime NOT NULL,
  [ImageLocation] nvarchar(255),
)
GO

CREATE TABLE [CharacterSheet] (
  [Id] integer PRIMARY KEY,
  [UserProfileId] integer,
  [ChracterName] nvarchar(255),
  [CharacterPicture] nvarchar(255),
  [AlignmentId] integer,
  [CharacterLevel] integer,
  [ClassId] integer,
  [RaceId] integer,
  [Gender] nvarchar(255),
  [Age] integer,
  [Height] integer,
  [Weight] integer,
  [Hair] nvarchar(255),
  [Eyes] nvarchar(255),
  [Strength] integer,
  [Dexterity] integer,
  [Constitution] integer,
  [Intelligence] integer,
  [Wisdom] integer,
  [Charisma] integer,
  [ArmorClass] integer,
  [TouchAC] integer,
  [FlatFootedAC] integer,
  [CMBouns] integer,
  [CMDefense] integer,
  [CharacterFeats] nvarchar(255),
  [Weapon] nvarchar(255),
  [Armor] nvarchar(255),
  [Languages] nvarchar(255),
  [CurrentEXP] integer,
  [NextLevelEXP] integer,
  [Copper] integer,
  [Silver] integer,
  [Gold] integer,
  [Platnium] integer,
  [Acrobatics] integer,
  [Appraise] integer,
  [Bluff] integer,
  [Climb] integer,
  [Craft] integer,
  [Diplomacy] integer,
  [DisableDevice] integer,
  [Disguise] integer,
  [EscapeArtist] integer,
  [Fly] integer,
  [HandleAnimal] integer,
  [Heal] integer,
  [Intimidate] integer,
  [KnowledgeArcana] integer,
  [KnowledgeDungeoneering] integer,
  [KnowledgeEngineering] integer,
  [KnowledgeGeography] integer,
  [KnowledgeHistory] integer,
  [KnowledgeLocal] integer,
  [KnowledgeNature] integer,
  [KnowledgeNobility] integer,
  [KnowledgePlanes] integer,
  [KnowledgeReligion] integer,
  [Linguistics] integer,
  [Perception] integer,
  [Profession] integer,
  [Ride] integer,
  [SenseMotive] integer,
  [SleightOfHand] integer,
  [Spellcraft] integer,
  [Stealth] integer,
  [Survival] integer,
  [Swim] integer,
  [UseMagicDevice] integer,
  [TotalSkillPoinst] integer,
  [Spells] nvarchar(225),
  [LandSpeed] integer,
  [SwimSpeed] integer,
  [ClimbSpeed] integer,
  [FlySpeed] integer
)
GO

CREATE TABLE [Alignment] (
  [Id] integer PRIMARY KEY,
  [AlignmentName] nvarchar(255)
)
GO

CREATE TABLE [Class] (
  [Id] integer PRIMARY KEY,
  [ClassName] nvarchar(255),
  [CharacterLevel] integer,
  [BaB] integer,
  [Reflex] integer,
  [Will] integer,
  [Fort] integer,
  [HitDie] integer,
  [SkillPoints] integer,
)
GO

CREATE TABLE [Race] (
  [Id] integer PRIMARY KEY,
  [RaceName] nvarchar(255),
  [MovementSpeed] integer,
  [Vision] nvarchar(225),
  [BonusAttributes] nvarchar(225),
  [Size] nvarchar(255)
)
GO

ALTER TABLE [CharacterSheet] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [CharacterSheet] ADD FOREIGN KEY ([AlignmentId]) REFERENCES [Alignment] ([Id])
GO

ALTER TABLE [CharacterSheet] ADD FOREIGN KEY ([RaceId]) REFERENCES [Race] ([Id])
GO

ALTER TABLE [CharacterSheet] ADD FOREIGN KEY ([ClassId]) REFERENCES [Class] ([Id])
GO
