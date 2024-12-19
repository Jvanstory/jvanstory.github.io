import discord
from discord.ext import commands
import asyncio

# Your Discord bot token
TOKEN = ''

# Prefix for bot commands
PREFIX = '!'

# Intents for the bot (you may need to adjust these based on your bot's functionality)
intents = discord.Intents.default()

# Initialize bot with a prefix and intents
bot = commands.Bot(command_prefix=PREFIX, intents=intents)

# Event to trigger when the bot is ready
@bot.event
async def on_ready():
    print(f'{bot.user.name} has connected to Discord!')

# Event to trigger when someone joins a voice channel
@bot.event
async def on_voice_state_update(member, before, after):
    if before.channel is None and after.channel is not None:
        # Check if the member is the bot itself to avoid infinite loops
        if member == bot.user:
            return
        
        print(f'Member {member.name} joined voice channel {after.channel.name}')

        # Replace 'sound_file_path' with the path to your sound file
        sound_file_path = 'C:/Users/joeva/jvanstory.github.io/Random/nfl.mp3'
        
        print(f'Sound file path: {sound_file_path}')

        # Full path to the FFmpeg executable
        ffmpeg_path = 'C:/Users/joeva/Downloads/ffmpeg.exe'
        
        print(f'FFmpeg path: {ffmpeg_path}')

        # Join the voice channel where the member joined
        voice_channel = after.channel
        voice_client = await voice_channel.connect()

        # Play the sound
        source = discord.FFmpegPCMAudio(sound_file_path, executable=ffmpeg_path)
        source = discord.PCMVolumeTransformer(source, volume=0.1)  # Adjust the volume here (0.0 to 2.0)
        voice_client.play(source, after=lambda e: print('Player error: %s' % e) if e else None)

        # Wait for the sound to finish playing before disconnecting
        while voice_client.is_playing():
            print('Playing sound...')
            await asyncio.sleep(1)
        
        print('Sound finished playing. Disconnecting...')
        await voice_client.disconnect()

# Run the bot with your token
bot.run(TOKEN)
