import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Claire Waterson',
      description: 'trying my best to live in here.',
    },
    {
      id: randomUUID(),
      name: 'Rebecca Carlson',
      description: 'Hi there!',
    },
    {
      id: randomUUID(),
      name: 'Josh Darling',
      description: 'Not in the mood for talking.',
    },
  ];
  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  create(createProfileDto: CreateProfileDto) {
    const createProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };

    this.profiles.push(createProfileDto);
    return createProfile;
  }
}
