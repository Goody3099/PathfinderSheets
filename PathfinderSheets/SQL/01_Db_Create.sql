USE [master]

IF db_id('PathfinderSheets') IS NULL
CREATE DATABASE [PathfinderSheets]
GO

USE [PathfinderSheets]
GO

DROP TABLE IF EXISTS [CharacterSheet];
DROP TABLE IF EXISTS [Race];
DROP TABLE IF EXISTS [Class];
DROP TABLE IF EXISTS [ClassData];
DROP TABLE IF EXISTS [Alignment];
DROP TABLE IF EXISTS [UserProfile];
GO

CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
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
  [Id] integer PRIMARY KEY IDENTITY,
  [UserProfileId] integer,
  [Acrobatics] integer,
  [Age] integer,
  [AlignmentId] integer,
  [Appraise] integer,
  [Armor] nvarchar(255),
  [ArmorClass] integer,
  [Bluff] integer,
  [CharacterFeats] nvarchar(255),
  [CharacterLevel] integer,
  [CharacterName] nvarchar(255),
  [CharacterPicture] nvarchar(255),
  [Charisma] integer,
  [ClassDataId] integer,
  [ClassId] integer,
  [Climb] integer,
  [ClimbSpeed] integer,
  [CMBouns] integer,
  [CMDefense] integer,
  [Constitution] integer,
  [Copper] integer,
  [Craft] integer,
  [CurrentEXP] integer,
  [CurrentHealth] integer,
  [Deity] nvarchar (255),
  [Dexterity] integer,
  [Diplomacy] integer,
  [DisableDevice] integer,
  [Disguise] integer,
  [EscapeArtist] integer,
  [Eyes] nvarchar(255),
  [FlatFootedAC] integer,
  [Fly] integer,
  [FlySpeed] integer,
  [Gender] nvarchar(255),
  [Gold] integer,
  [Hair] nvarchar(255),
  [HandleAnimal] integer,
  [Heal] integer,
  [Height] nvarchar(255),
  [Homeland] nvarchar (255),
  [Inititiative] integer,
  [Intelligence] integer,
  [Intimidate] integer,
  [Inventory] nvarchar (255),
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
  [LandSpeed] integer,
  [Languages] nvarchar(255),
  [Linguistics] integer,
  [MaximumHealth] integer,
  [Melee] integer,
  [NextLevelEXP] integer,
  [Perception] integer,
  [Perform] integer,
  [Platnium] integer,
  [Profession] integer,
  [RaceId] integer,
  [Ranged] integer,
  [Ride] integer,
  [SenseMotive] integer,
  [Silver] integer,
  [Size] nvarchar (255),
  [SleightOfHand] integer,
  [Spellcraft] integer,
  [SpellResistance] integer,
  [Spells] nvarchar(225),
  [Stealth] integer,
  [Strength] integer,
  [Survival] integer,
  [Swim] integer,
  [SwimSpeed] integer,
  [TotalSkillPoints] integer,
  [TouchAC] integer,
  [UseMagicDevice] integer,
  [Weapon] nvarchar(255),
  [Weight] nvarchar(255),
  [Wisdom] integer,
)
GO

CREATE TABLE [Alignment] (
  [Id] integer PRIMARY KEY IDENTITY,
  [AlignmentName] nvarchar(255)
)
GO

CREATE TABLE [Class] (
  [Id] integer PRIMARY KEY IDENTITY,
  [ClassDataId] integer,
  [CharacterLevel] integer,
  [BaB] integer,
  [Reflex] integer,
  [Will] integer,
  [Fort] integer,
  [HitDie] integer,
  [SkillPoints] integer,
)
GO

CREATE TABLE [ClassData] (
[Id] integer PRIMARY KEY IDENTITY,
[ClassName] nvarchar(225),
)
GO

CREATE TABLE [Race] (
  [Id] integer PRIMARY KEY IDENTITY,
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

ALTER TABLE [CharacterSheet] ADD FOREIGN KEY ([ClassDataId]) REFERENCES [ClassData] ([Id])
GO

ALTER TABLE [Class] ADD FOREIGN KEY ([ClassDataId]) REFERENCES [ClassData] ([Id])
GO