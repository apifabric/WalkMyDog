# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 30, 2024 14:07:32
# Database: sqlite:////tmp/tmp.VQ2va7keix/WalkMyDog/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class BusinessAdministrator(SAFRSBaseX, Base):
    """
    description: A table for business administrators who manage the system.
    """
    __tablename__ = 'business_administrator'
    _s_collection_name = 'BusinessAdministrator'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Owner(SAFRSBaseX, Base):
    """
    description: A table that stores registered dog owners and their personal information.
    """
    __tablename__ = 'owner'
    _s_collection_name = 'Owner'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    email = Column(String, nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    DogList : Mapped[List["Dog"]] = relationship(back_populates="owner")
    WalkRequestList : Mapped[List["WalkRequest"]] = relationship(back_populates="owner")
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="owner")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="owner")



class Role(SAFRSBaseX, Base):
    """
    description: A table to maintain roles for different user types.
    """
    __tablename__ = 'role'
    _s_collection_name = 'Role'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    UserRoleList : Mapped[List["UserRole"]] = relationship(back_populates="role")



class SystemLog(SAFRSBaseX, Base):
    """
    description: A table for logging system events and actions.
    """
    __tablename__ = 'system_log'
    _s_collection_name = 'SystemLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    event = Column(String, nullable=False)
    event_date = Column(DateTime)
    user_id = Column(Integer)
    created_by = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Walker(SAFRSBaseX, Base):
    """
    description: A table that stores registered dog walkers and their personal information.
    """
    __tablename__ = 'walker'
    _s_collection_name = 'Walker'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    postal_code = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    email = Column(String, nullable=False)
    max_dogs_per_walk = Column(Integer, nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    WalkRequestList : Mapped[List["WalkRequest"]] = relationship(back_populates="walker")
    WalkerAvailabilityList : Mapped[List["WalkerAvailability"]] = relationship(back_populates="walker")
    WalkerRateList : Mapped[List["WalkerRate"]] = relationship(back_populates="walker")
    WalkList : Mapped[List["Walk"]] = relationship(back_populates="walker")
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="walker")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="walker")



class Dog(SAFRSBaseX, Base):
    """
    description: A table that stores information about dogs owned by registered owners.
    """
    __tablename__ = 'dog'
    _s_collection_name = 'Dog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    owner_id = Column(ForeignKey('owner.id'), nullable=False)
    name = Column(String, nullable=False)
    breed = Column(String, nullable=False)
    size = Column(String, nullable=False)
    notes = Column(String)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)
    owner : Mapped["Owner"] = relationship(back_populates=("DogList"))

    # child relationships (access children)
    WalkList : Mapped[List["Walk"]] = relationship(back_populates="dog")



class UserRole(SAFRSBaseX, Base):
    """
    description: A table to associate users with their respective roles.
    """
    __tablename__ = 'user_role'
    _s_collection_name = 'UserRole'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, nullable=False)
    role_id = Column(ForeignKey('role.id'), nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)
    role : Mapped["Role"] = relationship(back_populates=("UserRoleList"))

    # child relationships (access children)



class WalkRequest(SAFRSBaseX, Base):
    """
    description: A table to handle walk requests for dogs, connecting owners and walkers.
    """
    __tablename__ = 'walk_request'
    _s_collection_name = 'WalkRequest'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    owner_id = Column(ForeignKey('owner.id'), nullable=False)
    walker_id = Column(ForeignKey('walker.id'))
    day_of_week = Column(String, nullable=False)
    time_of_day = Column(String, nullable=False)
    status = Column(String, nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)
    owner : Mapped["Owner"] = relationship(back_populates=("WalkRequestList"))
    walker : Mapped["Walker"] = relationship(back_populates=("WalkRequestList"))

    # child relationships (access children)
    WalkList : Mapped[List["Walk"]] = relationship(back_populates="walk_request")



class WalkerAvailability(SAFRSBaseX, Base):
    """
    description: A table to store availability of walkers on different days and times.
    """
    __tablename__ = 'walker_availability'
    _s_collection_name = 'WalkerAvailability'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walker_id = Column(ForeignKey('walker.id'), nullable=False)
    day_of_week = Column(String, nullable=False)
    time_of_day = Column(String, nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)
    walker : Mapped["Walker"] = relationship(back_populates=("WalkerAvailabilityList"))

    # child relationships (access children)



class WalkerRate(SAFRSBaseX, Base):
    """
    description: A table that indicates the walking rate for different dog sizes set by walkers.
    """
    __tablename__ = 'walker_rate'
    _s_collection_name = 'WalkerRate'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walker_id = Column(ForeignKey('walker.id'), nullable=False)
    size = Column(String, nullable=False)
    rate = Column(Float, nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)
    walker : Mapped["Walker"] = relationship(back_populates=("WalkerRateList"))

    # child relationships (access children)



class Walk(SAFRSBaseX, Base):
    """
    description: A table that stores confirmed walks, linking walkers and dogs.
    """
    __tablename__ = 'walk'
    _s_collection_name = 'Walk'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walk_request_id = Column(ForeignKey('walk_request.id'), nullable=False)
    walker_id = Column(ForeignKey('walker.id'), nullable=False)
    dog_id = Column(ForeignKey('dog.id'), nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)
    dog : Mapped["Dog"] = relationship(back_populates=("WalkList"))
    walk_request : Mapped["WalkRequest"] = relationship(back_populates=("WalkList"))
    walker : Mapped["Walker"] = relationship(back_populates=("WalkList"))

    # child relationships (access children)
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="walk")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="walk")



class Payment(SAFRSBaseX, Base):
    """
    description: A table that records payments made by owners after a walk.
    """
    __tablename__ = 'payment'
    _s_collection_name = 'Payment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walk_id = Column(ForeignKey('walk.id'), nullable=False)
    owner_id = Column(ForeignKey('owner.id'), nullable=False)
    walker_id = Column(ForeignKey('walker.id'), nullable=False)
    amount = Column(Float, nullable=False)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)
    owner : Mapped["Owner"] = relationship(back_populates=("PaymentList"))
    walk : Mapped["Walk"] = relationship(back_populates=("PaymentList"))
    walker : Mapped["Walker"] = relationship(back_populates=("PaymentList"))

    # child relationships (access children)



class Review(SAFRSBaseX, Base):
    """
    description: A table that allows owners to leave reviews for walkers after the walk.
    """
    __tablename__ = 'review'
    _s_collection_name = 'Review'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    walk_id = Column(ForeignKey('walk.id'), nullable=False)
    owner_id = Column(ForeignKey('owner.id'), nullable=False)
    walker_id = Column(ForeignKey('walker.id'), nullable=False)
    review_text = Column(String)
    rating = Column(Integer)
    created_date = Column(DateTime)
    updated_date = Column(DateTime)
    created_by = Column(String)

    # parent relationships (access parent)
    owner : Mapped["Owner"] = relationship(back_populates=("ReviewList"))
    walk : Mapped["Walk"] = relationship(back_populates=("ReviewList"))
    walker : Mapped["Walker"] = relationship(back_populates=("ReviewList"))

    # child relationships (access children)
