import { Body, Controller, Get, Post } from '@nestjs/common';
import { RocketTeamMember } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from './database/prisma.service';

interface CreateRockeatTeamMember {
  name: string;
  function: string;
}

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello(): Promise<{ member: RocketTeamMember }> {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: 'example-id',
        name: 'Persona Name Example',
        function: 'This field is not required',
      },
    });
    return { member };
  }

  @Post()
  async createRocketTeamMember(
    @Body() body: CreateRockeatTeamMember,
  ): Promise<RocketTeamMember> {
    const { name, function: memberFunction } = body;

    const member = await this.prisma.rocketTeamMember.create({
      data: { id: randomUUID(), function: memberFunction, name },
    });

    return member;
  }
}
