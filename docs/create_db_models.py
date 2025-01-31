# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime

Base = declarative_base()

class Walker(Base):
    """description: A table that stores registered dog walkers and their personal information."""
    __tablename__ = 'walker'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    postal_code = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    email = Column(String, nullable=False)
    max_dogs_per_walk = Column(Integer, nullable=False)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class WalkerAvailability(Base):
    """description: A table to store availability of walkers on different days and times."""
    __tablename__ = 'walker_availability'
    id = Column(Integer, primary_key=True, autoincrement=True)
    walker_id = Column(Integer, ForeignKey('walker.id'), nullable=False)
    day_of_week = Column(String, nullable=False)
    time_of_day = Column(String, nullable=False)  # Options: 'morning', 'afternoon'
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class Owner(Base):
    """description: A table that stores registered dog owners and their personal information."""
    __tablename__ = 'owner'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    email = Column(String, nullable=False)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class Dog(Base):
    """description: A table that stores information about dogs owned by registered owners."""
    __tablename__ = 'dog'
    id = Column(Integer, primary_key=True, autoincrement=True)
    owner_id = Column(Integer, ForeignKey('owner.id'), nullable=False)
    name = Column(String, nullable=False)
    breed = Column(String, nullable=False)
    size = Column(String, nullable=False)  # Options: 'small', 'medium', 'large'
    notes = Column(String, nullable=True)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class WalkRequest(Base):
    """description: A table to handle walk requests for dogs, connecting owners and walkers."""
    __tablename__ = 'walk_request'
    id = Column(Integer, primary_key=True, autoincrement=True)
    owner_id = Column(Integer, ForeignKey('owner.id'), nullable=False)
    walker_id = Column(Integer, ForeignKey('walker.id'), nullable=True)
    day_of_week = Column(String, nullable=False)
    time_of_day = Column(String, nullable=False)
    status = Column(String, nullable=False, default="Pending")  # Options: 'Pending', 'Confirmed', 'Rejected'
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class Walk(Base):
    """description: A table that stores confirmed walks, linking walkers and dogs."""
    __tablename__ = 'walk'
    id = Column(Integer, primary_key=True, autoincrement=True)
    walk_request_id = Column(Integer, ForeignKey('walk_request.id'), nullable=False)
    walker_id = Column(Integer, ForeignKey('walker.id'), nullable=False)
    dog_id = Column(Integer, ForeignKey('dog.id'), nullable=False)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class Payment(Base):
    """description: A table that records payments made by owners after a walk."""
    __tablename__ = 'payment'
    id = Column(Integer, primary_key=True, autoincrement=True)
    walk_id = Column(Integer, ForeignKey('walk.id'), nullable=False)
    owner_id = Column(Integer, ForeignKey('owner.id'), nullable=False)
    walker_id = Column(Integer, ForeignKey('walker.id'), nullable=False)
    amount = Column(Float, nullable=False)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class Review(Base):
    """description: A table that allows owners to leave reviews for walkers after the walk."""
    __tablename__ = 'review'
    id = Column(Integer, primary_key=True, autoincrement=True)
    walk_id = Column(Integer, ForeignKey('walk.id'), nullable=False)
    owner_id = Column(Integer, ForeignKey('owner.id'), nullable=False)
    walker_id = Column(Integer, ForeignKey('walker.id'), nullable=False)
    review_text = Column(String, nullable=True)
    rating = Column(Integer, nullable=True)  # Assuming a scale of 1 to 5
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class WalkerRate(Base):
    """description: A table that indicates the walking rate for different dog sizes set by walkers."""
    __tablename__ = 'walker_rate'
    id = Column(Integer, primary_key=True, autoincrement=True)
    walker_id = Column(Integer, ForeignKey('walker.id'), nullable=False)
    size = Column(String, nullable=False)  # Options: 'small', 'medium', 'large'
    rate = Column(Float, nullable=False)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class Role(Base):
    """description: A table to maintain roles for different user types."""
    __tablename__ = 'role'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class UserRole(Base):
    """description: A table to associate users with their respective roles."""
    __tablename__ = 'user_role'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, nullable=False)  # Either a Walker or Owner ID
    role_id = Column(Integer, ForeignKey('role.id'), nullable=False)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class BusinessAdministrator(Base):
    """description: A table for business administrators who manage the system."""
    __tablename__ = 'business_administrator'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    created_date = Column(DateTime, default=datetime.now)
    updated_date = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    created_by = Column(String, nullable=True)

class SystemLog(Base):
    """description: A table for logging system events and actions."""
    __tablename__ = 'system_log'
    id = Column(Integer, primary_key=True, autoincrement=True)
    event = Column(String, nullable=False)
    event_date = Column(DateTime, default=datetime.now)
    user_id = Column(Integer, nullable=True)
    created_by = Column(String, nullable=True)

# Setup the database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Sample data
roles = [
    Role(name='Walker', description='A person who walks dogs'),
    Role(name='Owner', description='A person who owns dogs'),
    Role(name='Administrator', description='A person who manages the system')
]

walkers = [
    Walker(first_name='John', last_name='Doe', postal_code='12345', phone='555-0100', email='john.doe@example.com', max_dogs_per_walk=3),
    Walker(first_name='Jane', last_name='Smith', postal_code='67890', phone='555-0111', email='jane.smith@example.com', max_dogs_per_walk=2)
]

walker_availabilities = [
    WalkerAvailability(walker_id=1, day_of_week='Mon', time_of_day='morning'),
    WalkerAvailability(walker_id=2, day_of_week='Tue', time_of_day='afternoon')
]

owners = [
    Owner(name='Alice Johnson', address='123 Elm Street', phone='555-0120', email='alice.j@example.com'),
    Owner(name='Bob Brown', address='456 Oak Avenue', phone='555-0130', email='bob.b@example.com')
]

dogs = [
    Dog(owner_id=1, name='Rex', breed='Labrador', size='large', notes='Friendly'),
    Dog(owner_id=2, name='Spot', breed='Beagle', size='medium', notes='Loves walks')
]

walk_requests = [
    WalkRequest(owner_id=1, walker_id=None, day_of_week='Mon', time_of_day='morning'),
    WalkRequest(owner_id=2, walker_id=None, day_of_week='Tue', time_of_day='afternoon')
]

walks = [
    Walk(walk_request_id=1, walker_id=1, dog_id=1),
    Walk(walk_request_id=2, walker_id=2, dog_id=2)
]

payments = [
    Payment(walk_id=1, owner_id=1, walker_id=1, amount=20.0),
    Payment(walk_id=2, owner_id=2, walker_id=2, amount=15.0)
]

reviews = [
    Review(walk_id=1, owner_id=1, walker_id=1, review_text='Great service!', rating=5),
    Review(walk_id=2, owner_id=2, walker_id=2, review_text='Good job.', rating=4)
]

walker_rates = [
    WalkerRate(walker_id=1, size='large', rate=20.0),
    WalkerRate(walker_id=2, size='medium', rate=15.0)
]

user_roles = [
    UserRole(user_id=1, role_id=1),
    UserRole(user_id=1, role_id=2)
]

administrators = [
    BusinessAdministrator(name='Charlie Admin', email='charlie.admin@example.com')
]

system_logs = [
    SystemLog(event='User Registered', user_id=1),
    SystemLog(event='Payment Processed', user_id=2)
]

# Add sample data to the session
session.add_all(roles)
session.add_all(walkers)
session.add_all(walker_availabilities)
session.add_all(owners)
session.add_all(dogs)
session.add_all(walk_requests)
session.add_all(walks)
session.add_all(payments)
session.add_all(reviews)
session.add_all(walker_rates)
session.add_all(user_roles)
session.add_all(administrators)
session.add_all(system_logs)

# Commit the session to the database
session.commit()
